
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLumx from "../../src/components/MdiLumx.vue";

test("MdiLumx snapshot", () => {
  const wrapper = mount(MdiLumx, {});
  expect(wrapper.html()).toMatchSnapshot();
});
