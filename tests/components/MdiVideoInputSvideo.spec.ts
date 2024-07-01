
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoInputSvideo from "../../src/components/MdiVideoInputSvideo.vue";

test("MdiVideoInputSvideo snapshot", () => {
  const wrapper = mount(MdiVideoInputSvideo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
