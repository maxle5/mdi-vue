
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandPointingLeft from "../../src/components/MdiHandPointingLeft.vue";

test("MdiHandPointingLeft snapshot", () => {
  const wrapper = mount(MdiHandPointingLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
