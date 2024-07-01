
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandOkay from "../../src/components/MdiHandOkay.vue";

test("MdiHandOkay snapshot", () => {
  const wrapper = mount(MdiHandOkay, {});
  expect(wrapper.html()).toMatchSnapshot();
});
