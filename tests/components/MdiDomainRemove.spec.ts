
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDomainRemove from "../../src/components/MdiDomainRemove.vue";

test("MdiDomainRemove snapshot", () => {
  const wrapper = mount(MdiDomainRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
