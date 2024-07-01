
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCogTransfer from "../../src/components/MdiCogTransfer.vue";

test("MdiCogTransfer snapshot", () => {
  const wrapper = mount(MdiCogTransfer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
