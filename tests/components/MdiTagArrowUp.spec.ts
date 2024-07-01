
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagArrowUp from "../../src/components/MdiTagArrowUp.vue";

test("MdiTagArrowUp snapshot", () => {
  const wrapper = mount(MdiTagArrowUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
