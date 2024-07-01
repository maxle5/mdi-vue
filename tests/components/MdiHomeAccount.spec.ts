
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeAccount from "../../src/components/MdiHomeAccount.vue";

test("MdiHomeAccount snapshot", () => {
  const wrapper = mount(MdiHomeAccount, {});
  expect(wrapper.html()).toMatchSnapshot();
});
