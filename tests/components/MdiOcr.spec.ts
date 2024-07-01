
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOcr from "../../src/components/MdiOcr.vue";

test("MdiOcr snapshot", () => {
  const wrapper = mount(MdiOcr, {});
  expect(wrapper.html()).toMatchSnapshot();
});
