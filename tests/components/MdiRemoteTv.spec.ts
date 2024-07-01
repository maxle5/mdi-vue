
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRemoteTv from "../../src/components/MdiRemoteTv.vue";

test("MdiRemoteTv snapshot", () => {
  const wrapper = mount(MdiRemoteTv, {});
  expect(wrapper.html()).toMatchSnapshot();
});
