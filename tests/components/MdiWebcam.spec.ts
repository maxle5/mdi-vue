
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWebcam from "../../src/components/MdiWebcam.vue";

test("MdiWebcam snapshot", () => {
  const wrapper = mount(MdiWebcam, {});
  expect(wrapper.html()).toMatchSnapshot();
});
