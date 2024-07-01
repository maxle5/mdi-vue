
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDonkey from "../../src/components/MdiDonkey.vue";

test("MdiDonkey snapshot", () => {
  const wrapper = mount(MdiDonkey, {});
  expect(wrapper.html()).toMatchSnapshot();
});
