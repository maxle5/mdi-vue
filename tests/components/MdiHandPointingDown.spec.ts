
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandPointingDown from "../../src/components/MdiHandPointingDown.vue";

test("MdiHandPointingDown snapshot", () => {
  const wrapper = mount(MdiHandPointingDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
