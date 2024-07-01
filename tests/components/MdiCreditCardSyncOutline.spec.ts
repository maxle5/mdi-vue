
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardSyncOutline from "../../src/components/MdiCreditCardSyncOutline.vue";

test("MdiCreditCardSyncOutline snapshot", () => {
  const wrapper = mount(MdiCreditCardSyncOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
