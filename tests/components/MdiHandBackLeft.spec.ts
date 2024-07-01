
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandBackLeft from "../../src/components/MdiHandBackLeft.vue";

test("MdiHandBackLeft snapshot", () => {
  const wrapper = mount(MdiHandBackLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
