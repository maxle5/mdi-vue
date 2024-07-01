
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFingerprint from "../../src/components/MdiFingerprint.vue";

test("MdiFingerprint snapshot", () => {
  const wrapper = mount(MdiFingerprint, {});
  expect(wrapper.html()).toMatchSnapshot();
});
