
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHdr from "../../src/components/MdiHdr.vue";

test("MdiHdr snapshot", () => {
  const wrapper = mount(MdiHdr, {});
  expect(wrapper.html()).toMatchSnapshot();
});
