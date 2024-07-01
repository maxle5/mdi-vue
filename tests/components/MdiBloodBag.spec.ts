
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBloodBag from "../../src/components/MdiBloodBag.vue";

test("MdiBloodBag snapshot", () => {
  const wrapper = mount(MdiBloodBag, {});
  expect(wrapper.html()).toMatchSnapshot();
});
