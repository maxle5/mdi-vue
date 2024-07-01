
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandPointingUp from "../../src/components/MdiHandPointingUp.vue";

test("MdiHandPointingUp snapshot", () => {
  const wrapper = mount(MdiHandPointingUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
