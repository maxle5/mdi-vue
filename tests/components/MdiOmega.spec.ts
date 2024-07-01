
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOmega from "../../src/components/MdiOmega.vue";

test("MdiOmega snapshot", () => {
  const wrapper = mount(MdiOmega, {});
  expect(wrapper.html()).toMatchSnapshot();
});
