
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTelevision from "../../src/components/MdiTelevision.vue";

test("MdiTelevision snapshot", () => {
  const wrapper = mount(MdiTelevision, {});
  expect(wrapper.html()).toMatchSnapshot();
});
