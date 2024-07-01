
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOci from "../../src/components/MdiOci.vue";

test("MdiOci snapshot", () => {
  const wrapper = mount(MdiOci, {});
  expect(wrapper.html()).toMatchSnapshot();
});
