
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideo from "../../src/components/MdiVideo.vue";

test("MdiVideo snapshot", () => {
  const wrapper = mount(MdiVideo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
