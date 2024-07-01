
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileVideo from "../../src/components/MdiFileVideo.vue";

test("MdiFileVideo snapshot", () => {
  const wrapper = mount(MdiFileVideo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
