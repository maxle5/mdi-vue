
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoKartTrack from "../../src/components/MdiGoKartTrack.vue";

test("MdiGoKartTrack snapshot", () => {
  const wrapper = mount(MdiGoKartTrack, {});
  expect(wrapper.html()).toMatchSnapshot();
});
