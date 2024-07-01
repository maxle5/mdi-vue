
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDoorbellVideo from "../../src/components/MdiDoorbellVideo.vue";

test("MdiDoorbellVideo snapshot", () => {
  const wrapper = mount(MdiDoorbellVideo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
