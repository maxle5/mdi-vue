
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandPeaceVariant from "../../src/components/MdiHandPeaceVariant.vue";

test("MdiHandPeaceVariant snapshot", () => {
  const wrapper = mount(MdiHandPeaceVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
