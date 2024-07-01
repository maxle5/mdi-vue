
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRoundedCorner from "../../src/components/MdiRoundedCorner.vue";

test("MdiRoundedCorner snapshot", () => {
  const wrapper = mount(MdiRoundedCorner, {});
  expect(wrapper.html()).toMatchSnapshot();
});
