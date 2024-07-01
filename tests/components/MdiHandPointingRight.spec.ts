
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandPointingRight from "../../src/components/MdiHandPointingRight.vue";

test("MdiHandPointingRight snapshot", () => {
  const wrapper = mount(MdiHandPointingRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
