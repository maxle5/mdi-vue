
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRemoteTvOff from "../../src/components/MdiRemoteTvOff.vue";

test("MdiRemoteTvOff snapshot", () => {
  const wrapper = mount(MdiRemoteTvOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
