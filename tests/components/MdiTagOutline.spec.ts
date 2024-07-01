
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagOutline from "../../src/components/MdiTagOutline.vue";

test("MdiTagOutline snapshot", () => {
  const wrapper = mount(MdiTagOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
