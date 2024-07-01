
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOcarina from "../../src/components/MdiOcarina.vue";

test("MdiOcarina snapshot", () => {
  const wrapper = mount(MdiOcarina, {});
  expect(wrapper.html()).toMatchSnapshot();
});
