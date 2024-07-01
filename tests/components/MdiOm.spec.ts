
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOm from "../../src/components/MdiOm.vue";

test("MdiOm snapshot", () => {
  const wrapper = mount(MdiOm, {});
  expect(wrapper.html()).toMatchSnapshot();
});
