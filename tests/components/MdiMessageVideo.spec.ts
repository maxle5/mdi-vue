
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageVideo from "../../src/components/MdiMessageVideo.vue";

test("MdiMessageVideo snapshot", () => {
  const wrapper = mount(MdiMessageVideo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
