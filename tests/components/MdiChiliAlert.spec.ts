
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChiliAlert from "../../src/components/MdiChiliAlert.vue";

test("MdiChiliAlert snapshot", () => {
  const wrapper = mount(MdiChiliAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
