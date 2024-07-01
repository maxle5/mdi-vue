
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUUpLeftBold from "../../src/components/MdiArrowUUpLeftBold.vue";

test("MdiArrowUUpLeftBold snapshot", () => {
  const wrapper = mount(MdiArrowUUpLeftBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
