
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerAccount from "../../src/components/MdiMapMarkerAccount.vue";

test("MdiMapMarkerAccount snapshot", () => {
  const wrapper = mount(MdiMapMarkerAccount, {});
  expect(wrapper.html()).toMatchSnapshot();
});
