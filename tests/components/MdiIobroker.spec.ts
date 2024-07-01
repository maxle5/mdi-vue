
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiIobroker from "../../src/components/MdiIobroker.vue";

test("MdiIobroker snapshot", () => {
  const wrapper = mount(MdiIobroker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
