
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneSyncOutline from "../../src/components/MdiPhoneSyncOutline.vue";

test("MdiPhoneSyncOutline snapshot", () => {
  const wrapper = mount(MdiPhoneSyncOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
