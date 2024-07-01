
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGlassTulip from "../../src/components/MdiGlassTulip.vue";

test("MdiGlassTulip snapshot", () => {
  const wrapper = mount(MdiGlassTulip, {});
  expect(wrapper.html()).toMatchSnapshot();
});
