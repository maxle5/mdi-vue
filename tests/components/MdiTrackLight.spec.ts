
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrackLight from "../../src/components/MdiTrackLight.vue";

test("MdiTrackLight snapshot", () => {
  const wrapper = mount(MdiTrackLight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
