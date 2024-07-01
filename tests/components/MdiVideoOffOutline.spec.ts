
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoOffOutline from "../../src/components/MdiVideoOffOutline.vue";

test("MdiVideoOffOutline snapshot", () => {
  const wrapper = mount(MdiVideoOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
