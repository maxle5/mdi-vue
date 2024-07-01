
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMixedMartialArts from "../../src/components/MdiMixedMartialArts.vue";

test("MdiMixedMartialArts snapshot", () => {
  const wrapper = mount(MdiMixedMartialArts, {});
  expect(wrapper.html()).toMatchSnapshot();
});
