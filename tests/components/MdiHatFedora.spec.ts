
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHatFedora from "../../src/components/MdiHatFedora.vue";

test("MdiHatFedora snapshot", () => {
  const wrapper = mount(MdiHatFedora, {});
  expect(wrapper.html()).toMatchSnapshot();
});
