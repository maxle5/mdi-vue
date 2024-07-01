
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCamera from "../../src/components/MdiCamera.vue";

test("MdiCamera snapshot", () => {
  const wrapper = mount(MdiCamera, {});
  expect(wrapper.html()).toMatchSnapshot();
});
