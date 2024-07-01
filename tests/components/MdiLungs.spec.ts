
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLungs from "../../src/components/MdiLungs.vue";

test("MdiLungs snapshot", () => {
  const wrapper = mount(MdiLungs, {});
  expect(wrapper.html()).toMatchSnapshot();
});
