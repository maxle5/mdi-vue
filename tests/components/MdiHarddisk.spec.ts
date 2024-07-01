
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHarddisk from "../../src/components/MdiHarddisk.vue";

test("MdiHarddisk snapshot", () => {
  const wrapper = mount(MdiHarddisk, {});
  expect(wrapper.html()).toMatchSnapshot();
});
