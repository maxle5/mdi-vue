
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKettleSteam from "../../src/components/MdiKettleSteam.vue";

test("MdiKettleSteam snapshot", () => {
  const wrapper = mount(MdiKettleSteam, {});
  expect(wrapper.html()).toMatchSnapshot();
});
