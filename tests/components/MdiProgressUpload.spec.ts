
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProgressUpload from "../../src/components/MdiProgressUpload.vue";

test("MdiProgressUpload snapshot", () => {
  const wrapper = mount(MdiProgressUpload, {});
  expect(wrapper.html()).toMatchSnapshot();
});
