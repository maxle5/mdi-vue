
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEightTrack from "../../src/components/MdiEightTrack.vue";

test("MdiEightTrack snapshot", () => {
  const wrapper = mount(MdiEightTrack, {});
  expect(wrapper.html()).toMatchSnapshot();
});
