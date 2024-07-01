
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContrast from "../../src/components/MdiContrast.vue";

test("MdiContrast snapshot", () => {
  const wrapper = mount(MdiContrast, {});
  expect(wrapper.html()).toMatchSnapshot();
});
