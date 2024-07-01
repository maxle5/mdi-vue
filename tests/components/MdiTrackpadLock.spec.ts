
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrackpadLock from "../../src/components/MdiTrackpadLock.vue";

test("MdiTrackpadLock snapshot", () => {
  const wrapper = mount(MdiTrackpadLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
