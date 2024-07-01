
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOffer from "../../src/components/MdiOffer.vue";

test("MdiOffer snapshot", () => {
  const wrapper = mount(MdiOffer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
